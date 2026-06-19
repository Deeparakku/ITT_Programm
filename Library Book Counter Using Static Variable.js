import java.util.Scanner;
class Book {
    private static int totalBooks = 0;
    private String title;

    public Book(String title) {
        this.title = title;
        totalBooks++;
        System.out.println("Book Added");
        System.out.println("Total Books: " + totalBooks);
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of books to add: ");
        int numberOfBooks = scanner.nextInt();
        scanner.nextLine(); 
        
        for (int i = 1; i <= numberOfBooks; i++) {
            System.out.print("Enter title for book " + i + ": ");
            String bookTitle = scanner.nextLine();
            
            new Book(bookTitle); 
        }

        scanner.close();
    }
}
