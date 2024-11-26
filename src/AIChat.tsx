import { useState } from "react";
import { getAIResponse } from "./services/api";

const AIChat = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await getAIResponse(userInput);
      setAiResponse(response);
    } catch (error) {
      setAiResponse("Error fetching response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask something..."
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {aiResponse && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          <strong>Response:</strong>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default AIChat;
