const API_URL = "/api/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzExY3MwMjA0NjZAbWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3ODI4ODg5NTQsImlhdCI6MTc4Mjg4ODA1NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNkMWEwNWM5LTE4OGUtNDNiZi1iYmNiLTYzODQ0MTY5ZjMyNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5hbWJ1cmkgcmlzaGlrYSIsInN1YiI6IjlmYTQ5OTRjLTIwZmQtNDc4Ni1hOTI0LTkxMzY1MThjOTNiZSJ9LCJlbWFpbCI6IjIzMTFjczAyMDQ2NkBtYWxsYXJlZGR5dW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJuYW1idXJpIHJpc2hpa2EiLCJyb2xsTm8iOiIyMzExY3MwMjA0NjYiLCJhY2Nlc3NDb2RlIjoieHBRZGRkIiwiY2xpZW50SUQiOiI5ZmE0OTk0Yy0yMGZkLTQ3ODYtYTkyNC05MTM2NTE4YzkzYmUiLCJjbGllbnRTZWNyZXQiOiJISnhkR1R5TXFBRFBYVVlYIn0.zrPzxu4ACt1aJ7RHNA3tN_b8XXI2_8vwXr-Bp8eeO_Q";

export async function fetchNotifications(limit = 10, page = 1, type = "") {
  let url = `${API_URL}?limit=${limit}&page=${page}`;

  if (type && type !== "All") {
    url += `&notification_type=${type}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    console.log(text);
    throw new Error(`Failed to fetch notifications (${response.status})`);
  }

  return await response.json();
}