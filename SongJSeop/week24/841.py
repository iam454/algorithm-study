from typing import List
from collections import deque

class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        checked = [False] * len(rooms)

        toVisit = deque([0])
        while toVisit:
            key = toVisit.popleft()
            checked[key] = True

            for foundKey in rooms[key]:
                if checked[foundKey]: continue
                toVisit.append(foundKey)

        return False not in checked


solution = Solution()
print(solution.canVisitAllRooms(rooms = [[1],[2],[3],[]]))