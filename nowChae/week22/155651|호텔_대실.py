def solution(book_time):
    
    books = []
    
    for book in book_time:
        start_h, start_m = book[0].split(':')
        end_h, end_m = book[1].split(':')
        
        if int(end_m) >= 50:
            end_h = str(int(end_h) +1)
            end_m = '0' + str(int(end_m) + 10 - 60)
        else:
            end_m = str(int(end_m) +10)
        
        books.append((int(start_h+start_m), int(end_h+end_m)))
    books.sort()

    rooms = []
    
    
    for b in books:
        
        if len(rooms) == 0:
            rooms.append(b[1])
            
        else:
            state = False
            for i,r in enumerate(rooms):
                if r <= b[0]:
                    rooms[i] = b[1]
                    state = True
                    break
            
            if not state:
                rooms.append(b[1])
        rooms.sort()

    return len(rooms)