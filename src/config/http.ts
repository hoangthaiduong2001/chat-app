export const httpClient = async <TRes, TBody>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: TBody,
  headers: Record<string, string> = { 'Content-Type': 'application/json' }
): Promise<TRes> => {
  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
};
