#[cfg(test)]
mod tests;

mod random;


use random::number::random_number;
use random::string::random_string;

fn main() {
    println!("random number between 1 - 5: {}", random_number(1, 5));
    println!("random string with a length of 5: {}", random_string(5))
}
