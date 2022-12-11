public class User {
    private String firstName;
    private String lastName;

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    private User() {

    }

    public static User builder(){
        return new User();
    }

    public User firstName(String firstName){
        this.setFirstName(firstName);
        return this;
    }

    public User lastName(String lastName){
        this.setLastName(lastName);
        return this;
    }
}
