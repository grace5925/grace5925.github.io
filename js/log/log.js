window.onerror = (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) => {
  const data = {
    title: window.document.title,
    locationHref: window.location.href,
    cokkie: window.document.cookie,
    UA: window.navigator.userAgent,
    errorMessage,
    scriptURI,
    lineNumber,
    columnNumber,
    detailMsg: (errorObj && errorObj.message) || "",
    stack: (errorObj && errorObj.stack) || ""
  };
  localStorage.windowError = JSON.stringify(data);
  console.warn("error", data);
};
