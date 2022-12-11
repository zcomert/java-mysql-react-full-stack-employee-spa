public class App {
    public static void main(String[] args) throws Exception {

        User user1 = User.builder()
                .firstName("Ahmet")
                .lastName("Can");

        System.out.print(user1.getFirstName() + " " + user1.getLastName());

    }
}
