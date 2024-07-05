import React from "react";
import Title from "../Title";
import pdf from "../../assets/problem_statements/Arch.pdf";

const Arch = () => {
  return (
    <div className="sidebar_left">
      <div className="single_title">
        <br />
        <Title color="ARCHITECTURE" />
      </div>
      <div className="single_desc">
        <p>
          <h3>ARCH01 : Futuristic architecture bamboo construction</h3>
          Bamboo is a woody grass that is known to be the fastest-growing plant in the world. It has become a popular material choice in architecture and design projects because of its sustainable qualities and hardwearing characteristics as it has a higher compressive strength than concrete or wood, and rivals the tensility of steel. Bamboo can be cut and laminated into sheets and planks. This process involves cutting stalks into thin strips, planing them flat, and drying the strips; they are then glued, pressed, and finished. Bamboo is stronger than steel. This makes it an ideal material for construction projects, both big and small. Bamboo can also be processed in different ways to make it stronger. For instance, carbonization is a process that involves heating bamboo in an oxygen-free environment.
        </p>
        <p>
          <h3>ARCH02 : Modern solution for overcrowding in commercial space of Chandni Chowk Delhi</h3>
          Old Delhi is full of wonders, and Chandni Chowk tops this list. From housing some of the unique architecture belonging to the bygone era to being the oldest and busiest market, this place forms an integral part of Old Delhi. Besides, it is the end destination for every shopaholic and food lover. Whether it is a traditional dress or kitchen accessory, you will get almost everything here at Chandni Chowk Market Delhi. Chandni Chowk keeps its doors open for tourists and locals alike for the entire year except on Sundays. So, you can visit this place at any time without worrying about encountering a closed market. If you are visiting Old Delhi during the summer season, try and avoid going to the market during the daytime, as that would be quite uncomfortable, courtesy of the scorching Delhi heat. After sundown, the place gets more crowded as several shops open after 5 PM. So, be prepared to witness a humongous crowd after dusk. Also, try to avoid visiting the place during monsoons, as heavy showers create a mess in the narrow alleys.
        </p>
        <p>
          <h3>ARCH03 : Climatic responsive architecture for hot and dry area</h3>
          Architecture as a set of various climatic conditions. Architecture doesn't end within its walls - it starts in skies, goes through walls, and ends in us. The invention of glass and its immaterial properties enabled the outside sensations like warmth and light to enter the building. Responsive architecture envisions the built environment to adapt to the changing needs of its occupants dynamically. Although it is increasingly feasible to move space-defining objects like room dividers by mobile robots, little is known about how or when such spatial adaptations should occur.
        </p>
        <p>
          <h3>ARCH04 : Construction method without the help of RCC in construction</h3>
          RCC is a popular choice for projects because it is lightweight and easy to work with, making it a good choice for bridges and other large construction projects. Reinforced cement concrete (RCC) is a type of concrete that uses reinforcing fibers to improve the strength and stability of the concrete. The fibers are woven into the concrete before it’s poured, and they help to distribute pressure and stress throughout the material. This makes RCC more resistant to compressive loading and less likely to crack or shatter under stress. It is also more durable than traditional concrete, which means it can last longer without needing repairs or replacement.
          <ul>
            <li>It must have the ability to withstand adequate tensile strength, compressive strength, bending, and shear forces.</li>
            <li>The concrete must not show excessive deflection and spoil serviceability requirement.</li>
            <li>The reinforcement needs to have a good covering so that corrosion does not occur.</li>
            <li>The hair cracks that are formed should be within the permissible limit.</li>
            <li>It should be good fire and weather-resistant.</li>
            <li>The concrete can be molded into any desired shape and size while it is still fresh.</li>
            <li>It should be a high-durability material.</li>
            <li>Any load can be constructed to be supported by an RCC structure.</li>
          </ul>
          The earliest recordings of concrete structures date back to 6500BC by the Nabataea traders in regions of Syria and Jordan. They created concrete floors, housing structures, and underground cisterns. 3000 BC – Egypt and China: Egyptians used mud mixed with straw to bind dried bricks. François Coignet used iron-reinforced concrete as a technique for constructing building structures. In 1853, Coignet built the first iron-reinforced concrete structure, a four-story house at 72 rue Charles Michels in the suburbs of Paris.
        </p>
        <p>
          <h3>ARCH05 : Plan to build houses on the moon by 2040</h3>
          Rather than searching for real estate listings in another state or even country, you may eventually be looking for homes in an area much farther away: the moon. NASA has announced that it plans to build residences on the moon by 2040, which you may be eligible to live in during your lifetime.
        </p>
        <p>
          <h3>ARCH06 : How to Improve Internal and External Environments with Glass Ceilings</h3>
          As a highly transparent material that stands up to all but the most extreme of weather conditions, is easily formed into any size or shape, and, once formed, will last for thousands of years, glass is still one of the most innovative and crucial materials used in architecture. Although contemporary building practices allow us to form huge, glittering skyscrapers of glass that rise hundreds of meters into the air, the ancient material’s original purpose – to welcome light into weathertight and secure interiors – remains its most important more than a thousand years on. As important as glass is to almost every typology of architecture in the form of windows, when it comes to the roof of a building, the use of glass is not so simple. We’ve understood the power and danger of combining light and glass ever since we saw a magnifying glass used to concentrate the heat of sunlight into incredibly high temperatures in children’s cartoons. Under a glass roof, the solar gain can make for uncomfortable internal environments without the correct protective precautions.
        </p>
        <p>
          <h3>ARCH07 : Temple Complex of the Future (Religious Architecture)</h3>
          Temples have always held central importance around the world and can be active sites of cultural confluence. Possible areas to explore in your architecture dissertation for this topic are the uses of sustainability in creating religious structures, materials used, analysing the cultural significance of the architectural elements in structures, and classifying their types and historical context.
        </p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "1rem 0rem",
        }}
      >
        <a href={pdf} style={{ textDecoration: "none" }}>
          <div className="goodbtn">DOWNLOAD PDF</div>
        </a>
      </div>
    </div>
  );
};

export default Arch;
