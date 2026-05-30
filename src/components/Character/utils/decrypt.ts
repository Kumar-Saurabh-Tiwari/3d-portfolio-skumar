async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  try {
    console.log("Fetching encrypted file from:", url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    console.log("File fetched, reading as ArrayBuffer...");
    const encryptedData = await response.arrayBuffer();
    console.log("Encrypted data received, size:", encryptedData.byteLength);
    const iv = new Uint8Array(encryptedData.slice(0, 16));
    const data = encryptedData.slice(16);
    console.log("Generating AES key...");
    const key = await generateAESKey(password);
    console.log("Decrypting data...");
    const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
    console.log("Decryption successful, size:", decrypted.byteLength);
    return decrypted;
  } catch (err) {
    console.error("Error in decryptFile:", err);
    throw err;
  }
};
