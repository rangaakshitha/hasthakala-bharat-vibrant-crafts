import React, { useState, useEffect } from "react";
import { Volume2, Square } from "lucide-react";

interface SpeakerProps {
  text: string;
}

const Speaker: React.FC<SpeakerProps> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  // Load voices on mount
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // Try to find a female voice
      const femaleVoice =
        voices.find((v) => v.name.toLowerCase().includes("female")) ||
        voices.find((v) => v.name.includes("Google UK English Female")) ||
        voices.find((v) => v.name.includes("Samantha")) || // Mac
        voices.find((v) => v.name.includes("Microsoft Zira")) || // Windows
        voices.find((v) => v.lang === "en-GB"); // fallback

      setSelectedVoice(femaleVoice || voices[0]);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    } else {
      loadVoices();
    }
  }, []);

  const handleSpeak = () => {
    if (!window.speechSynthesis || !text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <button
      onClick={isSpeaking ? handleStop : handleSpeak}
      className="text-saffron-600 hover:text-saffron-800 transition-colors"
      aria-label={isSpeaking ? "Stop reading" : "Read aloud"}
    >
      {isSpeaking ? <Square size={18} /> : <Volume2 size={18} />}
    </button>
  );
};

export default Speaker;
