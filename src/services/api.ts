const API_PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = API_PROXY_URL + "https://api.openai.com/v1/completions";

export const getAIResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      console.error("API response error:", response.status, response.statusText);
      throw new Error("Failed to fetch AI response");
    }

    const data = await response.json();
    console.log("API response data:", data);
    return data.choices[0]?.text.trim();
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};
