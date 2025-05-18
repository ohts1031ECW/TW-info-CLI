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

//timestampをYYYY/MM/DD HH:mm:ss形式に変換
function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000); // 秒からミリ秒に変換
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}
export {
    isTwitterUrl,
    formatTimestamp
}