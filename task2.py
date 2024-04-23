def group_anagrams(words):
    anagrams = {}
    for word in words:
        # Sort the characters in the word to form the key
        sorted_word = ''.join(sorted(word))
        if sorted_word not in anagrams:
            anagrams[sorted_word] = []
        anagrams[sorted_word].append(word)
    
    # Extract the grouped anagrams as a list of lists
    return list(anagrams.values())

# Example usage:
words = ["affx", "a", "ab", "ba", "nnx", "xnn", "cde", "edc", "dce", "xffa"]
print(group_anagrams(words))
