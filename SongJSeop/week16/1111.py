import sys

N = int(input())
nums = list(map(int, input().split()))

if N == 1:
    print("A")
    sys.exit()

if N == 2:
    # 두 개의 숫자로는 여러 수열이 가능
    if nums[0] == nums[1]:
        print(nums[0])
    else:
        print("A")
    sys.exit()

# a와 b를 한 번에 계산
if nums[0] == nums[1]:  # 0번째와 1번째가 같다면 등차수열임
    a = 1
    b = 0
else:  # nums[1]은 a * nums[0] + b, nums[2]는 a * (a * nums[0] + b) + b
    # nums[2] - nums[1] = a * (a * ums[0] + b - nums[0]), nums[1] - nums[0] = a * nums[0] + b - nums[0]
    # (nums[2] - nums[1])를 (nums[1] - nums[0])으로 나누면 딱 a만 남음!
    a = (nums[2] - nums[1]) // (nums[1] - nums[0]) if (nums[1] - nums[0]) != 0 else 0
    b = nums[1] - a * nums[0]

for i in range(1, N - 1):
    if nums[i + 1] != a * nums[i] + b:
        print("B")
        sys.exit()

print(a * nums[-1] + b)
