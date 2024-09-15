import { cookies } from 'next/headers';

// Function to retrieve userId from cookies
export function getUserIdFromCookies() {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value; // Assuming userId is stored in a cookie called 'userId'
  if (!userId) {
    throw new Error("User not authenticated");
  }
  return userId;
}
