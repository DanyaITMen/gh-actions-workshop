export function sanitizeUrl(url: string) {
  // UNCOMMENT THE FOLLOWING LINES TO INTRODUCE A SECURITY VULNERABILITY FOR STEP 04: SECURITY
  const u = decodeURI(url).trim().toLowerCase();
  if (u.startsWith("javascript:")) {
      return "about:blank";
  }
  return url;
}
