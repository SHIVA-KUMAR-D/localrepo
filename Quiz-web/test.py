import google.generativeai as genai

genai.configure(api_key="AIzaSyCN4oX2TFdCzFpheVjfr7fKpaXC-dIt8m0")

model = genai.GenerativeModel("gemini-1.5-flash-latest")

try:
    response = model.generate_content("Tell me a story about a cat who learns to code.")
    print("\nStory:")
    print(response.text)
except Exception as e:
    print(f"Error: {e}")
