const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const defaultMouseMoveText = document.getElementById("default-mouse-move");
const debounceMouseMoveText = document.getElementById("debounce-mouse-move");
const throttleMouseMoveText = document.getElementById("throttle-mouse-move");

const inputElement = document.getElementById("input");

// Event Listener for input box
inputElement.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottletext(e.target.value);
});

// Event Listener for Mouse Move
document.addEventListener("mousemove", () => {
  incrementCount(defaultMouseMoveText);
  updateMouseMoveDebounceText();
  updateMouseMoveThrottletext();
});

function incrementCount(element) {
  element.textContent = (parseInt(element.textContent) || 0) + 1;
}

// A Debounced func to encounter mouse movement with a delay
// after the last mouse movement
const updateMouseMoveDebounceText = debounce(() => {
  incrementCount(debounceMouseMoveText);
});

// A Debounced function to update the text content with a delay
// after the last input event
const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

// Debounce Function to invoke Specific Function after certain
// period of inactiivity following the last event
function debounce(callback, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// A Throttled function to update the text content at regular interval
const updateMouseMoveThrottletext = throttle(() => {
  incrementCount(throttleMouseMoveText);
});

// A Throttled function to update the text content at regular interval
const updateThrottletext = throttle((text) => {
  throttleText.textContent = text;
});

// Throttle Function to invoke Specific Function at regular interval
// irrespective of how frequently event is triggered

function throttle(callback, delay = 1000) {
  let isThrottled = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      isThrottled = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (isThrottled) {
      waitingArgs = args;
      return;
    }

    isThrottled = true;

    callback(...args);

    setTimeout(timeoutFunc, delay);
  };
}
