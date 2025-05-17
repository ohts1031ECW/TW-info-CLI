function isTwitterUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();

    // 許容するホスト名（モバイルや短縮系も含む）
    const validHosts = [
      'twitter.com',
      'www.twitter.com',
      'mobile.twitter.com',
      'x.com',
      'www.x.com'
    ];

    return validHosts.includes(hostname);
  } catch (e) {
    // 無効なURL形式ならfalse
    return false;
  }
}
export {
    isTwitterUrl
}