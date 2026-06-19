public class Main {
    public static void main(String[] args) {
        String input = "banana";
        char[] chars = input.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == '0') {
                continue;
            }
            
            int count = 1;
            for (int j = i + 1; j < chars.length; j++) {
                if (chars[i] == chars[j]) {
                    count++;
                    chars[j] = '0'; 
                }
            }
            System.out.println(chars[i] + " : " + count);
        }
    }
}
