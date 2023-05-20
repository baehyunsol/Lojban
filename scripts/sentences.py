# sentence: String -> Vec<String>
def split_words(sentence):
    return [word if word[-1] != '.' else word[:-1] for word in sentence.split(" ") if len(word) > 0]

sentences = []