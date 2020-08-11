function getUrlParam(paramName) {
  let pageUrl = window.location.search.substring(1);
  let urlVariables = pageUrl.split('&');
  for (let i = 0; i < urlVariables.length; i++) {
      let param = urlVariables[i].split('=');
      if (param[0] == paramName) {
          return param[1];
      }
  }
}

function paramExists(paramName) {
  return getUrlParam(paramName) != null;
}

function getTrackConversionValueMonetizze() {
  let value = getUrlParam('valor');
  return (value != undefined) ? value : 100.00;  
}

function getTrackParams() {
  let urlParam = "";

  let src = getUrlParam('src');
  if (src != null) {
      urlParam = urlParam.concat("&src=" + src);
  }
  let utmSource = getUrlParam('utm_source');
  if (utmSource != null) {
      urlParam = urlParam.concat(urlParam == "" ? "?" : "&").concat("utm_source=" + utmSource);
  }
  let utmMedium = getUrlParam('utm_medium');
  if (utmMedium != null) {
      urlParam = urlParam.concat(urlParam == "" ? "?" : "&").concat("utm_medium=" + utmMedium);
  }
  let utmContent = getUrlParam('utm_content');
  if (utmContent != null) {
      urlParam = urlParam.concat(urlParam == "" ? "?" : "&").concat("utm_content=" + utmContent);
  }
  let utmCampaign = getUrlParam('utm_campaign');
  if (utmCampaign != null) {
      urlParam = urlParam.concat(urlParam == "" ? "?" : "&").concat("utm_campaign=" + utmCampaign);
  }
  let utmTerm = getUrlParam('utm_term');
  if (utmTerm != null) {
      urlParam = urlParam.concat(urlParam == "" ? "?" : "&").concat("utm_term=" + utmTerm);
  }

  return urlParam;
}