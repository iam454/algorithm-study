class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        result = []

        def next_number(number, letter):
            if len(letter) == len(digits): 
                if letter:
                    result.append(letter)
                return 
            
            if number[0] == "2":
                next_number(number[1:], letter+'a')
                next_number(number[1:], letter+'b')
                next_number(number[1:], letter+'c')

            elif number[0] == "3":
                next_number(number[1:], letter+'d')
                next_number(number[1:], letter+'e')
                next_number(number[1:], letter+'f')

            elif number[0] == "4":
                next_number(number[1:], letter+'g')
                next_number(number[1:], letter+'h')
                next_number(number[1:], letter+'i')

            elif number[0] == "5":
                next_number(number[1:], letter+'j')
                next_number(number[1:], letter+'k')
                next_number(number[1:], letter+'l')

            elif number[0] == "6":
                next_number(number[1:], letter+'m')
                next_number(number[1:], letter+'n')
                next_number(number[1:], letter+'o')
            
            elif number[0] == '7':
                next_number(number[1:], letter+'p')
                next_number(number[1:], letter+'q')
                next_number(number[1:], letter+'r')
                next_number(number[1:], letter+'s')
            
            elif number[0] == '8':
                next_number(number[1:], letter+'t')
                next_number(number[1:], letter+'u')
                next_number(number[1:], letter+'v')

            elif number[0] == '9':
                next_number(number[1:], letter+'w')
                next_number(number[1:], letter+'x')
                next_number(number[1:], letter+'y')
                next_number(number[1:], letter+'z')

        next_number(digits, '')
        return result