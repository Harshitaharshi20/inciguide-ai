import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const FaceScan = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  /* Capture image from webcam */
  const capturePhoto = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot);

    // Convert base64 to File
    fetch(screenshot)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "face.jpg", { type: "image/jpeg" });
        setImageFile(file);
      });
  };

  /* Upload image from device */
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  /* Send image to backend */
  const analyzeFace = async () => {
    if (!imageFile || !consent) {
      setError("Please provide consent and an image.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch("http://localhost:8000/analyze-face", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Analysis failed");

      const data = await response.json();
      setResult(data);

    } catch (err) {
      setError("Unable to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* Use results and return */
  const useResults = () => {
    navigate("/", { state: result });
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:underline"
          >
            ← Back
          </button>
          <h2 className="text-xl font-semibold mx-auto">
            Face Scan Analysis
          </h2>
        </div>

        {/* Consent */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm mb-4">
          <p className="font-medium text-green-800">Privacy Notice</p>
          <p className="text-green-700 mt-1">
            Your photo is used only for skin analysis and is deleted immediately.
            We do not identify or store faces.
          </p>
          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mr-2"
            />
            I consent to skin analysis
          </label>
        </div>

        {/* Camera Section */}
        {!image && (
          <div className="space-y-4">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-lg w-full"
            />
            <button
              onClick={capturePhoto}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Capture Photo
            </button>

            <div className="text-center text-sm text-gray-500">or</div>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full"
            />
          </div>
        )}

        {/* Preview */}
        {image && !result && (
          <div className="mt-4">
            <img
              src={image}
              alt="Preview"
              className="rounded-lg mb-4"
            />
            <button
              onClick={analyzeFace}
              disabled={loading}
              className="w-full bg-green-700 text-white py-2 rounded-lg disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Scan My Skin"}
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-600 text-sm mt-3">{error}</p>
        )}

        {/* Results */}
        {result && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Detected Skin Concerns</h3>

            <ul className="space-y-2">
              {result.detected_concerns.map((c, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span>{c.name}</span>
                  <span className="text-gray-500">
                    {(c.confidence * 100).toFixed(0)}%
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <p className="text-sm font-medium">Target Areas</p>
              <p className="text-sm text-gray-600">
                {result.target_areas.join(", ")}
              </p>
            </div>

            <button
              onClick={useResults}
              className="w-full mt-5 bg-black text-white py-2 rounded-lg"
            >
              Use These Results
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default FaceScan;
