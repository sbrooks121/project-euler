#Problem 3: Largest prime factor
#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

$number = 600851475143
$current_factor = 2
largest_prime_factor = 0

# Find the next factor

def getNextFactor
  found = false
  while (found == false)
    if ($number % $current_factor == 0)
      found = true
      puts 'Number is: ' + $number.to_s + ' and the next factor is: ' + $current_factor.to_s
    else
      $current_factor = $current_factor + 1
    end
  end
end

# Find largest prime factor
while (($number > 1) and ($current_factor != $number))
  if ($number % $current_factor == 0)
    $number = $number / $current_factor
    largest_prime_factor = $number
  else
    getNextFactor
  end
end

puts 'Largest prime factor of 600851475143 is: ' + largest_prime_factor.to_s
