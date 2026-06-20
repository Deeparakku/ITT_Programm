import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String text = input.nextLine(); 
        String[] words = text.split(" ");
        String result = "";
        for (int i = 0; i < words.length; i++) {
            String currentWord = words[i];
            
            if (!result.contains(currentWord)) {
                result = result + currentWord + " ";
            }
        }
        System.out.println(result.trim());
        
        input.close();
    }
}

