/**
 * Inserts Cloudinary fetch/format/quality/size params when the URL has no transform segment yet.
 * Reduces bytes for project thumbnails without changing repo image files.
 */
export function optimizeCloudinaryUrl(url) {
  if (!url || typeof url !== "string") return url;
  const m = url.match(
    /^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.+)$/i
  );
  if (!m) return url;
  const [, prefix, pathAfterUpload] = m;
  const firstSeg = pathAfterUpload.split("/")[0] ?? "";
  if (
    firstSeg.includes(",") ||
    /^(f_|q_|w_|c_|h_|e_)/.test(firstSeg)
  ) {
    return url;
  }
  return `${prefix}f_auto,q_auto:good,w_960,c_limit/${pathAfterUpload}`;
}
