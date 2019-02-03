(function () {
    const writeToDom = (element, value, isTime) => {
        const el = document.querySelector(element);
        if (isTime && isNaN(+value)) {
            time.style.fontSize = '10rem';
        }
        el.innerHTML = value;
    }

    const unHide = (element) => {
        const el = document.querySelector(element);
        el.hidden = false;
    }

    const hide = (element) => {
        const el = document.querySelector(element);
        el.hidden = true;
    }

    const parseDate = (date) => {
        const reg = /(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2})/i;
        const [, year, month, day, hour, minute] = reg.exec(date);
        return new Date(+year, +month -1, +day, +hour, +minute);
    }

    const convertDateToMinutes = (date) => {
        const dtf = new Intl.DateTimeFormat('en-US', {
            minute: 'numeric'
        });
        return dtf.format(date);
    }

    const minutesVsMinute = (input) => {
        return (+input > 1 || +input === 0) ? 'minutes' : 'minute';
    }

    const getPrediction = () => {
        fetch('https://us-central1-crumb-674e1.cloudfunctions.net/getBusPrediction', {
            mode: 'cors'
        })
        .then((res) => res.json())
        .then((json) => {
            hide('.loader');
            if (json['bustime-response'].error) {
                writeToDom('#time', json['bustime-response'].error[0].msg, true);
            } else {
                const prediction = json['bustime-response'].prd[0];
                const minutesAgo = convertDateToMinutes(new Date() - parseDate(prediction.tmstmp));
                const bigMinute = /due/i.test(prediction.prdctdn) ? 'ma dude' : minutesVsMinute(+prediction.prdctdn);
                writeToDom('#time', prediction.prdctdn, true);
                writeToDom('#timeChecked', minutesAgo, false);
                writeToDom('#minutes', minutesVsMinute(+minutesAgo), false);
                writeToDom('#bigMinute', bigMinute, false);
                unHide('#checked');
                unHide('#bigMinute');
                unHide('#time');
            }
        })
        .catch((e) => console.error(e));

    }
    
    getPrediction();
    setInterval(() => {
        getPrediction();
    }, 15000);
})();
