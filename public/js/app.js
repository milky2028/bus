(function () {
  const writeToDom = (element, value, isTime) => {
    const el = document.querySelector(element);
    if (isTime && isNaN(+value)) {
      el.style.fontSize = "10rem";
    }
    if (element === "#time" && value.length > 5) {
      el.style.fontSize = "7rem";
    }
    el.textContent = value;
  };

  const unHide = (element) => {
    const el = document.querySelector(element);
    el.hidden = false;
  };

  const hide = (element) => {
    const el = document.querySelector(element);
    el.hidden = true;
  };

  const minutesVsMinute = (input) => {
    return +input > 1 || +input === 0 ? "minutes" : "minute";
  };

  const getPrediction = () => {
    fetch(
      "https://us-central1-crumb-674e1.cloudfunctions.net/getBusPrediction",
      {
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        hide(".loader");
        if (json["bustime-response"].error) {
          writeToDom("#time", json["bustime-response"].error[0].msg, true);
          unHide("#time");
        } else {
          const prediction = json["bustime-response"].prd[0];
          const bigMinute = /due/i.test(prediction.prdctdn)
            ? "ma dude"
            : minutesVsMinute(+prediction.prdctdn);

          writeToDom("#time", prediction.prdctdn, true);
          writeToDom("#bigMinute", bigMinute, false);
          unHide("#bigMinute");
          unHide("#time");
        }
      })
      .catch((e) => console.error(e));
  };

  getPrediction();
})();
