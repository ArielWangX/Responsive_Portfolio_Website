# Personal Portfolio Website Sample
Learning from sample project: https://www.youtube.com/watch?v=hYv6BM2fWd8&amp;ab_channel=webdecoded

Deployed on Github Pages: https://arielwangx.github.io/Responsive_Portfolio_Website/

- ## Navbar and Banner Section:
  - Import ```Navbar``` from react bootstrap.
  - Import ```useState```, ```useEffect``` from react.
  - Add internal link and external link to nav
  - Apply CSS to style logo(spinning) and nav links.
  - Apply rotate text in ```Banner``` section. 
  - Import ```ArrowRightCircle``` from react-bootstrap-icons

![Banner Nav](https://user-images.githubusercontent.com/109891752/222336573-187968d7-a1ac-470e-b31e-589ef7553853.JPG)


- ## Skills Section:
  - import ```react-multi-carousel/lib/styles.css```.
  - import ```Carousel``` from react-multi-carousel.
  - Add text inside ```meter.svg``` to personalise each svg element for carousel.
  
![skill](https://user-images.githubusercontent.com/109891752/222336664-b665fb6c-1bef-4183-a87c-29ffd5c3afbd.JPG)


- ## Projects Section:
  - Create ```ProjectCard``` component to be as a template of each card in tab
  - Use string.split() to seperate string content of ```projects.description``` and map it with unordered list ```<li></li>```.
  - Apply relative size of text within each card content.
  - Add Github project's link to each card.
  - Import ```Nav```, ```Tab ``` from react-bootstrap.
  
![Project](https://user-images.githubusercontent.com/109891752/222336805-9e147ec7-340a-4cb4-b033-14d7019f2dfb.JPG)


- ## Contact Section:
  - Build up ```server``` to receive and email with information.
  - Use html ```<form>``` and ```<input>``` to create contact form and submit button.
  - Create ```formInitialDetails``` object to store the initial value of form.
  - Apply setFormDetails to manage changable form state value.
    ```const [formDetails, setFormDetails] = useState(formInitialDetails);```
  - Create ```onFormUpdate``` function to update form details
    ```
    const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value,
      });
    };
    ```
  -  Use ```value``` and ```onChange``` attributes of ```<input>``` element to manage form details state.
  
![Contact](https://user-images.githubusercontent.com/109891752/222336825-f6ac8abc-99f6-4c6f-aec7-b540e309f9a2.JPG)


- ## Newsletter and Footer Section:
  - Use Mailchimp plateform to handle subscription.
  - Create ```.env``` file to store mailchimp url, u and id.(which is empty right now)
  
![Subscribe Footer](https://user-images.githubusercontent.com/109891752/222336836-756d1c7d-9355-4ddf-9a1d-dc8c9c7f38dc.JPG)
