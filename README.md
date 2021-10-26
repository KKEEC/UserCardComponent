User card component is a Web Component built by using vanilla JS. The file named usercard.js contains all the functionalities of the card. 
THe specifications of web components including custom element, shadow DOM as well as HTML templates are used.
The template holds the HTML markup for image, email, phone and address as well as styling.
Shadow DOM is used for encapsulating styles and markup in the template.
The class and name of the custom element are identity-card and userCard respectively.

## For using the custom element in HTML, 
## 1. Attach the script and give source to usercard.js in the HTML file just above the closing body tag.
        <script src="usercard.js"></script>
## 2. Custom element with tag <identity-card></identity-card> can be used inside body.


## The different attributes for the element can be used as follows:
    a. name: String value for the name of person in identity-card
    b. image: string value for the url or the directory of the image of the user.
    c. email: String value for the email of user.
    d. address: string value of the address of the user.
    e. phone: string value for the phone number.
    
# The example of the identity card is as follows:

    <identity-card
        name="Minion Bob"
        image="https://i.pinimg.com/originals/3e/0b/d9/3e0bd971ef4434d9354ee6dde37aed88.jpg"
        email="bob@minions.com"
        address="13th Minion Park, 200"
        phone="+258-000-000"
    >
    </identity-card>
    
    
THE COMPONENT CAN BE VIEWED ONLINE AT https://kkeec.github.io/UserCardComponent/
