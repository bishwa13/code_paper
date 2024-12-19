
## Python

### Q1: Given two arrays, write a python function to return the intersection of the two? For example, X = [1,5,9,0] and Y = [3,0,2,9] it should return [9,0] ###

Answer:
```
set(X).intersect (set(Y))
```

### Q2: Given an array, find all the duplicates in this array? For example: input: [1,2,3,1,3,6,5] output: [1,3] ###

Answer:
```
set1=set()
res=set()
for i in list:
  if i in set1:
    res.add(i)
  else:
    set1.add(i)
print(res)
```


### Q3: Given an integer array, return the maximum product of any three numbers in the array? ###

Answer:

```
import heapq

def max_three(arr):
    a = heapq.nlargest(3, arr) # largerst 3 numbers for postive case
    b = heapq.nsmallest(2, arr) # for negative case
    return max(a[2]*a[1]*a[0], b[1]*b[0]*a[0])
```

### Q4: Given an integer array, find the sum of the largest contiguous subarray within the array. For example, given the array A = [0,-1,-5,-2,3,14] it should return 17 because of [3,14]. Note that if all the elements are negative it should return zero.

```
def max_subarray(arr):
  n = len(arr)
  max_sum = arr[0] #max
  curr_sum = 0 
  for i in range(n):
    curr_sum += arr[i]
    max_sum = max(max_sum, curr_sum)
    if curr_sum <0:
      curr_sum  = 0
  return max_sum    
      
```

### Q5: Define tuples and lists in Python What are the major differences between them? ###

Answer:

Lists:
In Python, a list is created by placing elements inside square brackets [], separated by commas. A list can have any number of items and they may be of different types (integer, float, string, etc.). A list can also have another list as an item. This is called a nested list.

1. Lists are mutable
2. Lists are better for performing operations, such as insertion and deletion.
3. Lists consume more memory
4. Lists have several built-in methods


Tuples:
A tuple is a collection of objects which ordered and immutable. Tuples are sequences, just like lists. The differences between tuples and lists are, the tuples cannot be changed unlike lists and tuples use parentheses, whereas lists use square brackets.

1. Tuples are immutable
2. Tuple data type is appropriate for accessing the elements
3. Tuples consume less memory as compared to the list
4. Tuple does not have many built-in methods.


* Mutable = we can change, add, delete and modify stuff
* Immutable = we cannot change, add, delete and modify stuff

### Q6: Compute the Euclidean Distance Between Two Series? ###
```
```

### Q7: Given an integer n and an integer K, output a list of all of the combination of k numbers chosen from 1 to n. For example, if n=3 and k=2, return [1,2],[1,3],[2,3] ### 

Answer
```
from itertools import combinations
def find_combintaion(k,n):
    list_num = []
    comb = combinations([x for x in range(1, n+1)],k)
    for i in comb:
        list_num.append(i)
    print("(K:{},n:{}):".format(k,n))
    print(list_num,"\n")
```

### Q8: Write a function to generate N samples from a normal distribution and plot them on the histogram ###

Answer:
Using bultin Libraries:
```
import numpy as np
import matplotlib.pyplot as plt

x = np.random.randn((N,))
plt.hist(x)
```
From scratch: 
![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/Python%20questions%208.png)


### Q9: What is the difference between apply and applymap function in pandas? ###

Answer:

Both the methods only accept callables as arguments but what sets them apart is that applymap is defined on dataframes and works element-wise. While apply can be defined on data frames as well as series and can work row/column-wise as well as element-wise. In terms of use case, applymap is used for transformations while apply is used for more complex operations and aggregations. Applymap only returns a dataframe while apply can return a scalar value, series, or dataframe.


### Q10: Given a string, return the first recurring character in it, or “None” if there is no recurring character. Example: input = "pythoninterviewquestion" , output = "n" ###

Answer:
```
input_string = "pythoninterviewquestion"

def first_recurring(input_str):
  
  a_str = ""
  for letter in input_str:
    a_str = a_str + letter
    if a_str.count(letter) > 1:
      return letter
  return None

first_recurring(input_string)

```

### Q11: Given a positive integer X return an integer that is a factorial of X. If a negative integer is provided, return -1. Implement the solution by using a recursive function. ###

Answer:
```
def factorial(x):
    # Edge cases
    if x < 0: return -1
    if x == 0: return 1
    
    # Exit condition - x = 1
    if x == 1:
        return x
    else:
        # Recursive part
        return x * factorial(x - 1)
```

### Q12: Given an m-by-n matrix with positive integers, determine the length of the longest path of increasing within the matrix. For example, consider the input matrix:

        [ 1 2 3 ]
        
        [ 4 5 6 ]
        
        [ 7 8 9 ]        
        
        The answer should be 5 since the longest path would be 1-2-5-6-9 


Answer:

```
MAX = 10

def Longest_Increasing_Path(dp, mat, n, m, x, y):
     
    # If value not calculated yet.
    if (dp[x][y] < 0):
        result = 0
         
        #  // If reach bottom right cell, return 1
        if (x == n - 1 and y == m - 1):
            dp[x][y] = 1
            return dp[x][y]
 
        # If reach the corner
        # of the matrix.
        if (x == n - 1 or y == m - 1):
            result = 1
 
        # If value greater than below cell.
        if (x + 1 < n and mat[x][y] < mat[x + 1][y]):
            result = 1 + LIP(dp, mat, n,
                            m, x + 1, y)
 
        # If value greater than left cell.
        if (y + 1 < m and mat[x][y] < mat[x][y + 1]):
            result = max(result, 1 + LIP(dp, mat, n,
                                        m, x, y + 1))
        dp[x][y] = result
    return dp[x][y]
 
# Wrapper function
def wrapper(mat, n, m):
    dp = [[-1 for i in range(MAX)]
            for i in range(MAX)]
    return Longest_Increasing_Path(dp, mat, n, m, 0, 0)
```    

### Q13: 𝐄𝐱𝐩𝐥𝐚𝐢𝐧 𝐰𝐡𝐚𝐭 𝐅𝐥𝐚𝐬𝐤 𝐢𝐬 𝐚𝐧𝐝 𝐢𝐭𝐬 𝐛𝐞𝐧𝐞𝐟𝐢𝐭𝐬 ###

Answer:

Flask is a web framework. This means flask provides you with tools, libraries, and technologies that allow you to build a web application. This web application can be some web pages, a blog, a wiki, or go as big as a web-based calendar application or a commercial website.

Benefits of Flask:
1. Scalable
Flask’s status as a microframework means that it can be used to grow a tech project such as a web app very quickly. 

2. Flexible
It allows the project to be rearranged and moved around. Also makes sure that the project structure does not collapse when a part is altered.

3. Easy to negotiate
At its core, the microframework is easy to understand for web developers also giving them more control over their code and what is possible.

4. Lightweight
Certain parts of a design of a tool/framework might need assembling and reassembling and do not rely on a large number of extensions to function which gives web developers a certain level of control. Further, Flask also supports modular programming, which is where its functionality can be split into several interchangeable modules and each module acts as an independent entity and executes a part of the functionality.

### Q14: 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐭𝐡𝐞 𝐝𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞 𝐛𝐞𝐭𝐰𝐞𝐞𝐧 𝐥𝐢𝐬𝐭𝐬, 𝐚𝐫𝐫𝐚𝐲𝐬, 𝐚𝐧𝐝 𝐬𝐞𝐭𝐬 𝐢𝐧 𝐏𝐲𝐭𝐡𝐨𝐧, 𝐚𝐧𝐝 𝐰𝐡𝐞𝐧 𝐲𝐨𝐮 𝐬𝐡𝐨𝐮𝐥𝐝 𝐮𝐬𝐞 𝐞𝐚𝐜𝐡 𝐨𝐟 𝐭𝐡𝐞𝐦? ####

Answer:

All three are data structures that can store sequences of data. but with some differences.

List denoted by [ ], set by { } , and array/tuple by ( )

𝐋𝐢𝐬𝐭: built-in data type in Python that helps store data in sequence with a very rich API that allows insertion removal retrieval and expansion. one of its benefits is that it allows the use of many data types in the same lists as it can store string, integers, floats of any other derived objects. one of its cons that are very slow if it will be used in numerical computation.

𝐀𝐫𝐫𝐚𝐲: on the other hand array can only store a single data type like integers only, float only, or any derived object only. but unlike lists, it's very efficient in terms of speed and memory usage (NumPy is one of the best libraries that implements array operations as it's a very rich library that solves many problems in numerical computation like vectorization, broadcasting, ...etc).

𝐒𝐞𝐭: it's also a built-in data type in Python and can store more that data types. but it does not allow for the existence of duplicates and if there are duplicates it only uses one of them. provide a lot of methods like unions, diffs, and intersections.

# Probability Interview Questions & Answers for Data Scientists #

### Q1: You and your friend are playing a game with a fair coin. The two of you will continue to toss the coin until the sequence HH or TH shows up. If HH shows up first, you win, and if TH shows up first your friend win. What is the probability of you winning the game? ###

Answer:

First flip is either heads or tails. If the second flip is heads we have a winner no matter what. Hence we have a 1/2 chance of game ending on the second flip.
If first flip is H, and the second flip is H, then player 1 wins. If first flip is H, and second flip is T, the game goes on. Generalizing, if the last flip was T, then HH will never occur and player 1 has no chance of wining. Either the game goes on OR player 2 wins OR the game goes on AND player 2 wins. 
Player 1 can only win if the first flip is H and the second flip is H. Consider the following four scenarios
- HH : Player 1 wins
- HT ... ? : HH will never occur before TH. Player 2 wins.
- TT ... ? : HH will never occur before TH. Player 2 wins.
- TH : Player 2 wins.
Hence probability of player 1 wining is 1/4 and probability of player 2 wining is 3/4.


### Q2: If you roll a dice three times, what is the probability to get two consecutive threes? ###

The right answer is 11/216

There are different ways to answer this question:

1. If we roll a dice three times we can get two consecutive 3’s in three ways:
1. The first two rolls are 3s and the third is any other number with a probability of 1/6 * 1/6 * 5/6.

2. The first one is not three while the other two rolls are 3s with a probability of 5/6 * 1/6 * 1/6

3. The last one is that the three rolls are 3s with probability 1/6 ^ 3

So the final result is 2 * (5/6 * (1/6)^2) + (1/6)*3 = 11/216

By Inclusion-Exclusion Principle:

Probability of at least two consecutive threes
= Probability of two consecutive threes in first two rolls + Probability of two consecutive threes in last two rolls - Probability of three consecutive threes

= 2 * Probability of two consecutive threes in first two rolls - Probability of three consecutive threes
= 2 * (1/6) * (1/6) - (1/6) * (1/6) * (1/6) = 11/216

It can be seen also like this:

The sample space is made of (x, y, z) tuples where each letter can take a value from 1 to 6, therefore the sample space has 6x6x6=216 values, and the number of outcomes that are considered two consecutive threes is (3,3, X) or (X, 3, 3), the number of possible outcomes is therefore 6 for the first scenario (3,3,1) till 
(3,3,6) and 6 for the other scenario (1,3,3) till (6,3,3) and subtract the duplicate (3,3,3) which appears in both, and this leaves us with a probability of 11/216.

### Q3: Suppose you have ten fair dice. If you randomly throw them simultaneously, what is the probability that the sum of all of the top faces is divisible by six? ###
Answer:
1/6

Explanation:
With 10 dices, the possible sums divisible by 6 are 12, 18, 24, 30, 36, 42, 48, 54, and 60. You don't actually need to calculate the probability of getting each of these numbers as the final sums from 10 dices because no matter what the sum of the first 9 numbers is, you can still choose a number between 1 to 6 on the last die and add to that previous sum to make the final sum divisible by 6. Therefore, we only care about the last die. And the probability to get that number on the last die is 1/6. So the answer is 1/6


### Q4: If you have three draws from a uniformly distributed random variable between 0 and 2, what is the probability that the median of three numbers is greater than 1.5? ###
The right answer is 5/32 or 0.156. There are different methods to solve it:

* **Method 1:**

To get a median greater than 1.5 at least two of the three numbers must be greater than 1.5. The probability of one number being greater than 1.5 in this distribution is 0.25. Then, using the binomial distribution with three trials and a success probability of 0.25 we compute the probability of 2 or more successes to get the probability of the median is more than 1.5, which would be about 15.6%.

* **Method2 :**

A median greater than 1.5 will occur when o all three uniformly distributed random numbers are greater than 1.5 or 1 uniform distributed random number between 0 and 1.5 and the other two are greater than 1.5.

So, the probability of the above event is
= {(2 - 1.5) / 2}^3 + (3 choose 1)(1.5/2)(0.5/2)^2
= 10/64 = 5/32

* **Method3:**

Using the Monte Carlo method as shown in the figure below:
![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/Monte%20Carlo%20Methods.png)

### Q5: Assume you have a deck of 100 cards with values ranging from 1 to 100 and you draw two cards randomly without replacement, what is the probability that the number of one of them is double the other? ###

There are a total of (100 C 2) = 4950 ways to choose two cards at random from the 100 cards and there are only 50 pairs of these 4950 ways that you will get one number and it's double. Therefore the probability that the number of one of them is double the other is 50/4950.

### Q6: What is the difference between the Bernoulli and Binomial distribution? ###
Answer:

Bernoulli and Binomial are both types of probability distributions.

The function of Bernoulli is given by

p(x) =p^x * q^(1-x) , x=[0,1] 

Mean is p

Variance p*(1-p)

The function Binomial is given by:

p(x) = nCx p^x q^(n-x) x=[0,1,2...n]

Mean : np

Variance :npq

Where p and q are the probability of success and probability of failure respectively, n is the number of independent trials and x is the number of successes.

As we can see sample space( x ) for Bernoulli distribution is Binary (2 outcomes), and just a single trial. 

Eg: A loan sanction for a person can be either a success or a failure, with no other possibility. (Hence single trial).

Whereas for Binomial the sample space(x) ranges from 0 -n.

Eg. Tossing a coin 6 times, what is the probability of getting 2 or a few heads? 

Here sample space is x=[0,1,2] and more than 1 trial and n=6(finite)

In short, Bernoulli Distribution is a single trial version of Binomial Distribution.

### Q7: If there are 30 people in a room, what is the probability that everyone has different birthdays? ###

The sample space is 365^30 and the number of events is 365p30 because we need to choose persons without replacement to get everyone to have a unique birthday therefore the Prob = 356p30 / 365^30 = 0.2936

A theoretical explanation is provided in the figure below thanks to Fazil Mohammed.

> Note: Why do we use permutations and not combinations here? <br> <br>
When calculating 365C30, you are saying: “Out of 365 days, I'm choosing 30 distinct days, but I don't care in what order they are assigned to people.” This treats the selection of birthdays as unordered, which isn't the case in the birthday problem, because who gets which birthday is important. <br>
For example, if you selected 30 distinct birthdays (as in a combination), this would only tell you which 30 birthdays are used, but it wouldn't account for the fact that different people being assigned different birthdays creates different outcomes. In contrast, with permutations, we are considering the specific assignment of each person to a particular birthday, where the order matters because we care about which person gets which birthday. i.e. if Person A is born on 01/01 and person B is born on 02/02, its different than if Person A is born on 02/02 and person B is born on 01/01.


Interesting facts provided by Rishi Dey Chowdhury:
1. With just 23 people there is over 50% chance of a birthday match and with 57 people the match probability exceeds 99%. One intuition to think of why with such a low number of people the probability of a match is so high. It's because for a match we require a pair of people and 23 choose 2 is 23*11 = 253 which is a relatively big number and ya 50% sounds like a decent probability of a match for this case.

2. Another interesting fact is if the assumption of equal probability of birthday of a person on any day out of 365 is violated and there is a non-equal probability of birthday of a person among days of the year then, it is even more likely to have a birthday match.
![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/Therotical%20Explanation%20Q%207%20Probability.jfif)

### Q8: Assume two coins, one fair and the other is unfair. You pick one at random, flip it five times, and observe that it comes up as tails all five times. What is the probability that you are fliping the unfair coin? Assume that the unfair coin always results in tails. ###

Answer:

Let's use Baye’s theorem let U denote the case where you are flipping the unfair coin and F denote the case where you are flipping the fair coin. Since the coin is chosen randomly, we know that P(U)=P(F)=0.5. Let 5T denote the event of flipping 5 tails in a row.

Then, we are interested in solving for P(U|5T) (the probability that you are flipping the unfair coin given that you obtained 5 tails). Since the unfair coin always results in tails, therefore P(5T|U) = 1 and also P(5T|F) =1/2⁵ = 1/32 by the definition of a fair coin.

Lets apply Bayes theorem where P(U|5T) = P(5T|U) * P(U) / P(5T|U)* P(U) + P(5T|F)* P(F) = 0.5 / 0.5 +0.5* 1/32 = 0.97

Therefore the probability that you picked the unfair coin is 97%

### Q9: Assume you take a stick of length 1 and you break it uniformly at random into three parts. What is the probability that the three pieces can be used to form a triangle? ###

Answer:
The right answer is 0.25

Let's say, x and y are the lengths of the two parts, so the length of the third part will be 1-x-y

As per the triangle inequality theorem, the sum of two sides should always be greater than the third side. Therefore, no two lengths can be more than 1/2.
x<1/2
y<1/2

To achieve this the first breaking point (X) should before the 0.5 mark on the stick and the second breaking point (Y) should be after the 0.5 mark on the stick.

P(X < 0.5) = (0.5-0) / (1-0) = 0.5

P(Y > 0.5) = (1 - 0.5) / (1-0) = 0.5

Hence, overal probability = P(X < 0.5) * P(Y > 0.5) = 1/5 = 0.25

### Q10: Say you draw a circle and choose two chords at random. What is the probability that those chords will intersect? ###

Answer:
For making 2 chords, 4 points are necessary and from 4 points there are 3 different combinations of pairs of chords can be made. From the 3 combinations, there is only one combination in which the two chords intersect hence answer is 1/3.
Let's assume that P1, P2, P3, and P4 are four points then 3 different combinations are possible for pairs of chords: (P1 P2) (P3 P4) or (P1 P3) (P4 P2) or (P1 P4) (P2 P3) there the 3rd one will only intersect.

![Probability question 70](https://user-images.githubusercontent.com/72076328/189387820-1a4fb356-d8a9-4054-9475-09e3ad5bc872.png)


### Q11: If there’s a 15% probability that you might see at least one airplane in a five-minute interval, what is the probability that you might see at least one airplane in a period of half an hour? ###

Answer:

Probability of at least one plane in 5 mins interval=0.15
Probability of no plane in 5 mins interval=0.85
Probability of seeing at least one plane in 30 mins=1 - Probability of not seeing any plane in 30 minutes
=1-(0.85)^6 = 0.6228

This problem can also be solved using Poisson distribution. Refer this [blog post](https://towardsdatascience.com/shooting-star-problem-simple-solution-and-poisson-process-demonstration-739e94184edf).

### Q12: Say you are given an unfair coin, with an unknown bias towards heads or tails. How can you generate fair odds using this coin? ###

Answer:

![propability_83](https://user-images.githubusercontent.com/72076328/194715951-800d2018-28dc-482c-adf8-34a93ce9b8a1.jpg)

### Q13: According to hospital records, 75% of patients suffering from a disease die from that disease. Find out the probability that 4 out of the 6 randomly selected patients survive. ###

Answer:
This has to be a binomial since there are only 2 outcomes – death or life. 

Here n =6, and x=4. 

p=0.25 (probability if life) q = 0.75(probability of death)

Using probability mass function equation:

P(X) = nCx * p^x * q^(n-x)  


Then:

P(4) = 6C4 * (0.25)^4 * (0.75)^2 = 0.032

### Q14: Discuss some methods you will use to estimate the Parameters of a Probability Distribution ###

Answer:

There are different ways you can go about this. Following are some methods, one may choose only one of these or a combination depending on the observed data.
- Method of moments
- Maximum Likelihood Estimatation
- Bayesian Estimation
- Least Squares Estimation
- Method of Least Absolute Deviation
- Chi-squared Test

### Q15: You have 40 cards in four colors, 10 reds, 10 greens, 10 blues, and ten yellows. Each color has a number from 1 to 10. When you pick two cards without replacement, what is the probability that the two cards are not in the same color and not in the same number? ###

Answer:

Since it doesn't matter how you choose the first card, so, choose one card at random.
Now, all we have to care about is the restriction on the second card. It can't be the same number (i.e. 3 cards from the other colors can't be chosen in favorable cases) and also can't be the same color (i.e. 9 cards from the same color can't be chosen keep in mind we have already picked one).

So, the number of favorable choices for the 2nd card is (39-12)/39 = 27/39 = 9/13

![1668961881451](https://user-images.githubusercontent.com/72076328/202913961-f94f17b1-dc41-45b2-ba51-389583431d7b.jpg)


### Q16: Can you explain the difference between frequentist and Bayesian probability approaches? ###

Answer:

The frequentist approach to probability defines probability as the long-run relative frequency of an event in an infinite number of trials. It views probabilities as fixed and objective, determined by the data at hand. In this approach, the parameters of a model are treated as fixed and unknown and estimated using methods like maximum likelihood estimation.



On the other hand, Bayesian probability defines probability as a degree of belief, or the degree of confidence, in an event. It views probabilities as subjective and personal, representing an individual's beliefs. In this approach, the parameters of a model are treated as random variables with prior beliefs, which are updated as new data becomes available to form a posterior belief.



In summary, the frequentist approach deals with fixed and objective probabilities and uses methods like estimation, while the Bayesian approach deals with subjective and personal probabilities and uses methods like updating prior beliefs with new data.

### Q17: Explain the Difference Between Probability and Likelihood ###
Probability and likelihood are two concepts that are often used in statistics and data analysis, but they have different meanings and uses.

Probability is the measure of the likelihood of an event occurring. It is a number between 0 and 1, with 0 indicating an impossible event and 1 indicating a certain event. For example, the probability of flipping a coin and getting heads is 0.5.

The likelihood, on the other hand, is the measure of how well a statistical model or hypothesis fits a set of observed data. It is not a probability, but rather a measure of how plausible the data is given the model or hypothesis. For example, if we have a hypothesis that the average height of people in a certain population is 6 feet, the likelihood of observing a random sample of people with an average height of 5 feet would be low.


# Statistics Interview Questions & Answers for Data Scientists # 


### Q1: Explain the central limit theorem and give examples of when you can use it in a real-world problem. ###

Answers:

The center limit theorem states that if any random variable, regardless of the distribution, is sampled a large enough time, the sample mean will be approximately normally distributed. This allows for studying the properties of any statistical distribution as long as there is a large enough sample size.

Important remark from Adrian Olszewski:
⚠️ we can rely on the CLT with means (because it applies to any unbiased statistic) only if expressing data in this way makes sense. And it makes sense *ONLY* in the case of unimodal and symmetric data, coming from additive processes. So forget skewed, multi-modal data with mixtures of distributions, coming from multiplicative processes, and non-trivial mean-variance relationships. That are the places where arithmetic means is meaningless. Thus, using the CLT of e.g. bootstrap will give some valid answers to an invalid question.

⚠️ the distribution of means isn't enough. Every single kind of inference requires the entire test statistic to follow a certain distribution. And the test statistic consists also of the estimate of variance. Never assume the same sample size sufficient for means will suffice for the entire test statistic. See an excerpt from Rand Wilcox attached. Especially do never believe in magic numbers like N=30.

⚠️ think first about how to sensible describe your data, state the hypothesis of interest and then apply a valid method.


Examples of real-world usage of CLT:

1. The CLT can be used at any company with a large amount of data. Consider companies like Uber/Lyft wants to test whether adding a new feature will increase the booked rides or not using hypothesis testing. So if we have a large number of individual ride X, which in this case is a Bernoulli random variable (since the rider will book a ride or not), we can estimate the statistical properties of the total number of bookings. Understanding and estimating these statistical properties play a significant role in applying hypothesis testing to your data and knowing whether adding a new feature will increase the number of booked riders or not.

2. Manufacturing plants often use the central limit theorem to estimate how many products produced by the plant are defective.

### Q2: Briefly explain the A/B testing and its application? What are some common pitfalls encountered in A/B testing? ###
A/B testing helps us to determine whether a change in something will cause a change in performance significantly or not. So in other words you aim to statistically estimate the impact of a given change within your digital product (for example). You measure success and counter metrics on at least 1 treatment vs 1 control group (there can be more than 1 XP group for multivariate tests).

Applications:
1. Consider the example of a general store that sells bread packets but not butter, for a year. If we want to check whether its sale depends on the butter or not, then suppose the store also sells butter and sales for next year are observed. Now we can determine whether selling butter can significantly increase/decrease or doesn't affect the sale of bread.

2. While developing the landing page of a website you create 2 different versions of the page. You define a criteria for success eg. conversion rate. Then define your hypothesis
Null hypothesis(H): No difference between the performance of the 2 versions. Alternative hypothesis(H'): version A will perform better than B.

NOTE: You will have to split your traffic randomly(to avoid sample bias) into 2 versions. The split doesn't have to be symmetric, you just need to set the minimum sample size for each version to avoid undersample bias.

Now if version A gives better results than version B, we will still have to statistically prove that results derived from our sample represent the entire population. Now one of the very common tests used to do so is 2 sample t-test where we use values of significance level (alpha) and p-value to see which hypothesis is right. If p-value<alpha, H is rejected.


Common pitfalls:

1. Wrong success metrics inadequate to the business problem
2. Lack of counter metric, as you might add friction to the product regardless along with the positive impact
3. Sample mismatch: heterogeneous control and treatment, unequal variances
4. Underpowered test: too small sample or XP running too short 5. Not accounting for network effects (introduce bias within measurement)


### Q3: Describe briefly the hypothesis testing and p-value in layman’s term? And give a practical application for them ? ###
In Layman's terms:

- Hypothesis test is where you have a current state (null hypothesis) and an alternative state (alternative hypothesis). You assess the results of both of the states and see some differences. You want to decide whether the difference is due to the alternative approach or not.

You use the p-value to decide this, where the p-value is the likelihood of getting the same results the alternative approach achieved if you keep using the existing approach. It's the probability to find the result in the gaussian distribution of the results you may get from the existing approach.

The rule of thumb is to reject the null hypothesis if the p-value < 0.05, which means that the probability to get these results from the existing approach is <95%. But this % changes according to task and domain.

To explain the hypothesis testing in Layman's term with an example, suppose we have two drugs A and B, and we want to determine whether these two drugs are the same or different. This idea of trying to determine whether the drugs are the same or different is called hypothesis testing. The null hypothesis is that the drugs are the same, and the p-value helps us decide whether we should reject the null hypothesis or not.

p-values are numbers between 0 and 1, and in this particular case, it helps us to quantify how confident we should be to conclude that drug A is different from drug B. The closer the p-value is to 0, the more confident we are that the drugs A and B are different.

### Q4: Given a left-skewed distribution that has a median of 60, what conclusions can we draw about the mean and the mode of the data? ###

Answer:
Left skewed distribution means the tail of the distribution is to the left and the tip is to the right. So the mean which tends to be near outliers (very large or small values) will be shifted towards the left or in other words, towards the tail.

While the mode (which represents the most repeated value) will be near the tip and the median is the middle element independent of the distribution skewness, therefore it will be smaller than the mode and more than the mean.

Mean < 60
Mode > 60

![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/1657144303401.jpg)

### Q5: What is the meaning of selection bias and how to avoid it? ###
Answer:

Sampling bias is the phenomenon that occurs when a research study design fails to collect a representative sample of a target population. This typically occurs because the selection criteria for respondents failed to capture a wide enough sampling frame to represent all viewpoints.

The cause of sampling bias almost always owes to one of two conditions.
1. Poor methodology: In most cases, non-representative samples pop up when researchers set improper parameters for survey research. The most accurate and repeatable sampling method is simple random sampling where a large number of respondents are chosen at random. When researchers stray from random sampling (also called probability sampling), they risk injecting their own selection bias into recruiting respondents.

2. Poor execution: Sometimes data researchers craft scientifically sound sampling methods, but their work is undermined when field workers cut corners. By reverting to convenience sampling (where the only people studied are those who are easy to reach) or giving up on reaching non-responders, a field worker can jeopardize the careful methodology set up by data scientists.

The best way to avoid sampling bias is to stick to probability-based sampling methods. These include simple random sampling, systematic sampling, cluster sampling, and stratified sampling. In these methodologies, respondents are only chosen through processes of random selection—even if they are sometimes sorted into demographic groups along the way.
![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/Sampling%20bias.png)

### Q6: Explain the long-tailed distribution and provide three examples of relevant phenomena that have long tails. Why are they important in classification and regression problems? ###

Answer: 
A long-tailed distribution is a type of heavy-tailed distribution that has a tail (or tails) that drop off gradually and asymptotically.
 
Three examples of relevant phenomena that have long tails:

1. Frequencies of languages spoken
2. Population of cities
3. Pageviews of articles

All of these follow something close to 80-20 rule: 80% of outcomes (or outputs) result from 20% of all causes (or inputs) for any given event. This 20% forms the long tail in the distribution.

It’s important to be mindful of long-tailed distributions in classification and regression problems because the least frequently occurring values make up the majority of the population. This can ultimately change the way that you deal with outliers, and it also conflicts with some machine learning techniques with the assumption that the data is normally distributed.
![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/long-tailed%20distribution.jpg)

### Q7: What is the meaning of KPI in statistics ###
Answer:

**KPI** stands for key performance indicator, a quantifiable measure of performance over time for a specific objective. KPIs provide targets for teams to shoot for, milestones to gauge progress, and insights that help people across the organization make better decisions. From finance and HR to marketing and sales, key performance indicators help every area of the business move forward at the strategic level.

KPIs are an important way to ensure your teams are supporting the overall goals of the organization. Here are some of the biggest reasons why you need key performance indicators.

* Keep your teams aligned: Whether measuring project success or employee performance, KPIs keep teams moving in the same direction.
* Provide a health check: Key performance indicators give you a realistic look at the health of your organization, from risk factors to financial indicators.
* Make adjustments: KPIs help you clearly see your successes and failures so you can do more of what’s working, and less of what’s not.
* Hold your teams accountable: Make sure everyone provides value with key performance indicators that help employees track their progress and help managers move things along.

Types of KPIs
Key performance indicators come in many flavors. While some are used to measure monthly progress against a goal, others have a longer-term focus. The one thing all KPIs have in common is that they’re tied to strategic goals. Here’s an overview of some of the most common types of KPIs.

* **Strategic**: These big-picture key performance indicators monitor organizational goals. Executives typically look to one or two strategic KPIs to find out how the organization is doing at any given time. Examples include return on investment, revenue and market share.
* **Operational:** These KPIs typically measure performance in a shorter time frame, and are focused on organizational processes and efficiencies. Some examples include sales by region, average monthly transportation costs and cost per acquisition (CPA).
* **Functional Unit:** Many key performance indicators are tied to specific functions, such finance or IT. While IT might track time to resolution or average uptime, finance KPIs track gross profit margin or return on assets. These functional KPIs can also be classified as strategic or operational.
* **Leading vs Lagging:** Regardless of the type of key performance indicator you define, you should know the difference between leading indicators and lagging indicators. While leading KPIs can help predict outcomes, lagging KPIs track what has already happened. Organizations use a mix of both to ensure they’re tracking what’s most important.


![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/KPI.png)

### Q8: Say you flip a coin 10 times and observe only one head. What would be the null hypothesis and p-value for testing whether the coin is fair or not? ###

Answer:

The null hypothesis is that the coin is fair, and the alternative hypothesis is that the coin is biased. The p-value is the probability of observing the results obtained given that the null hypothesis is true, in this case, the coin is fair.

In total for 10 flips of a coin, there are 2^10 = 1024 possible outcomes and in only 10 of them are there 9 tails and one head.

Hence, the exact probability of the given result is the p-value, which is 10/1024 = 0.0098. Therefore, with a significance level set, for example, at 0.05, we can reject the null hypothesis.

### Q9: You are testing hundreds of hypotheses, each with a t-test. What considerations would you take into account when doing this? ###

Answer:
The main consideration when we have a large number of tests is that probability of getting a significant test due to chance alone increases. This will increase the type 1 error (rejecting the null hypothesis when it's actually true).

Therefore we need to consider the Bonferroni Effect which happens when we make many tests. Ex. If our significance level is 0.05 but we made a 100 test it means that the probability of getting a value inside the rejection rejoin is 0.0005, not 0.05 so here we need to use another significance level which's called alpha star = significance level /K Where K is the number of the tests.


### Q10: What general conditions must be satisfied for the central limit theorem to hold? ###

Answer:

In order to apply the central limit theorem, there are four conditions that must be met:

1.** Randomization:** The data must be sampled randomly such that every member in a population has an equal probability of being selected to be in the sample.

2. **Independence:** The sample values must be independent of each other.

3. **The 10% Condition:** When the sample is drawn without replacement, the sample size should be no larger than 10% of the population.

4. **Large Sample Condition:** The sample size needs to be sufficiently large.

### Q11: What is skewness discuss two methods to measure it? ###

Answer: 

Skewness refers to a distortion or asymmetry that deviates from the symmetrical bell curve, or normal distribution, in a set of data. If the curve is shifted to the left or to the right, it is said to be skewed.Skewness can be quantified as a representation of the extent to which a given distribution varies from a normal distribution. 
There are two main types of skewness negative skew which refers to a longer or fatter tail on the left side of the distribution, while positive skew refers to a longer or fatter tail on the right. These two skews refer to the direction or weight of the distribution.

The mean of positively skewed data will be greater than the median. In a negatively skewed distribution, the exact opposite is the case: the mean of negatively skewed data will be less than the median. If the data graphs symmetrically, the distribution has zero skewness, regardless of how long or fat the tails are.

There are several ways to measure skewness. Pearson’s first and second coefficients of skewness are two common methods. Pearson’s first coefficient of skewness, or Pearson mode skewness, subtracts the mode from the mean and divides the difference by the standard deviation. Pearson’s second coefficient of skewness, or Pearson median skewness, subtracts the median from the mean, multiplies the difference by three, and divides the product by the standard deviation.

![1663943424873](https://user-images.githubusercontent.com/72076328/191984720-5b267ab0-9ed3-4315-8443-62d662822796.jpg)

### Q12: You sample from a uniform distribution [0, d] n times. What is your best estimate of d? ###

Answer:

Intuitively it is the maximum of the sample points. Here's the mathematical proof is in the figure below:

![1665416540418](https://user-images.githubusercontent.com/72076328/194904988-e35754a7-6331-4989-9523-e122edb2a065.jpg)

### Q13: Discuss the Chi-square, ANOVA, and t-test ###

Answer:

Chi-square test A statistical method is used to find the difference or correlation between the observed and expected categorical variables in the dataset.

Example: A food delivery company wants to find the relationship between gender, location, and food choices of people.

It is used to determine whether the difference between 2 categorical variables is:

* Due to chance or

* Due to relationship

Analysis of Variance (ANOVA) is a statistical formula used to compare variances across the means (or average) of different groups. A range of scenarios uses it to determine if there is any difference between the means of different groups.

t_test is a statistical method for the comparison of the mean of the two groups of the normally distributed sample(s).

It comes in various types such as:

1. One sample t-test:

Used to compare the mean of a sample and the population.

2. Two sample t-tests:

Used to compare the mean of two independent samples and whether their population is statistically different.

3. Paired t-test:

Used to compare means of different samples from the same group.

### Q14: Say you have two subsets of a dataset for which you know their means and standard deviations. How do you calculate the blended mean and standard deviation of the total dataset? Can you extend it to K subsets? ###

Answer:


### Q15: What is the relationship between the significance level and the confidence level in Statistics?###

Answer:
Confidence level = 1 - significance level.

It's closely related to hypothesis testing and confidence intervals.

⏺ Significance Level according to the hypothesis testing literature means the probability of Type-I error one is willing to tolerate.

⏺ Confidence Level according to the confidence interval literature means the probability in terms of the true parameter value lying inside the confidence interval. They are usually written in percentages.

### Q16: What is the Law of Large Numbers in statistics and how it can be used in data science ? ###

Answer:
The law of large numbers states that as the number of trials in a random experiment increases, the average of the results obtained from the experiment approaches the expected value. In statistics, it's used to describe the relationship between sample size and the accuracy of statistical estimates.

In data science, the law of large numbers is used to understand the behavior of random variables over many trials. It's often applied in areas such as predictive modeling, risk assessment, and quality control to ensure that data-driven decisions are based on a robust and accurate representation of the underlying patterns in the data.

The law of large numbers helps to guarantee that the average of the results from a large number of independent and identically distributed trials will converge to the expected value, providing a foundation for statistical inference and hypothesis testing.

### Q17: What is the difference between a confidence interval and a prediction interval, and how do you calculate them? ###

Answer:

A confidence interval is a range of values that is likely to contain the true value of a population parameter with a certain level of confidence. It is used to estimate the precision or accuracy of a sample statistic, such as a mean or a proportion, based on a sample from a larger population.

For example, if we want to estimate the average height of all adults in a certain region, we can take a random sample of individuals from that region and calculate the sample mean height. Then we can construct a confidence interval for the true population mean height, based on the sample mean and the sample size, with a certain level of confidence, such as 95%. This means that if we repeat the sampling process many times, 95% of the resulting intervals will contain the true population mean height.

The formula for a confidence interval is:
confidence interval = sample statistic +/- margin of error

The margin of error depends on the sample size, the standard deviation of the population (or the sample, if the population standard deviation is unknown), and the desired level of confidence. For example, if the sample size is larger or the standard deviation is smaller, the margin of error will be smaller, resulting in a narrower confidence interval.

A prediction interval is a range of values that is likely to contain a future observation or outcome with a certain level of confidence. It is used to estimate the uncertainty or variability of a future value based on a statistical model and the observed data.

For example, if we have a regression model that predicts the sales of a product based on its price and advertising budget, we can use a prediction interval to estimate the range of possible sales for a new product with a certain price and advertising budget, with a certain level of confidence, such as 95%. This means that if we repeat the prediction process many times, 95% of the resulting intervals will contain the true sales value.

The formula for a prediction interval is:
prediction interval = point estimate +/- margin of error

The point estimate is the predicted value of the outcome variable based on the model and the input variables. The margin of error depends on the residual standard deviation of the model, which measures the variability of the observed data around the predicted values, and the desired level of confidence. For example, if the residual standard deviation is larger or the level of confidence is higher, the margin of error will be larger, resulting in a wider prediction interval.
![4](https://user-images.githubusercontent.com/72076328/227254955-b57bd42a-b51b-4b4a-abab-1adb059eca98.png)