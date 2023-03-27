import React from 'react'
import Banner from "./Banner"
import Cards from './Cards'
import "./home.css"

function Home() {
  return (
    <div className='home_container'>
      <Banner/>
      <section className='cardContainer'>
      </section>{""}
          <div className='cards'>
            <Cards src="https://a0.muscache.com/im/pictures/miso/Hosting-51108720/original/12d9a012-87ef-4fb5-bc5a-a5ceeb6c1762.jpeg?im_w=720"
            title="Zion, California"
            description="Soak up the sun and unwind in the Zion A-Frame. The unique convertible door lets the indoor comforts of this cozy cabin blend seamlessly with the stunning nature of the South Zion Mountains. The A-Frame living space is expansive - an open air concept to reconnect human and nature, allowing you to enjoy the natural world around you."
            price="$718 night"
            />
            <Cards src="https://a0.muscache.com/im/pictures/2e5ce6c9-4935-49ce-891e-e6f7251a8590.jpg?im_w=720"
            title="Malibu, California"
            description="Eagle's Watch is one of Malibu's most famous houses, impossible to miss while driving the Pacific Coast Highway and designed by legendary architect Harry Gesner. Perched above the Pacific Ocean, Eagle’s Watch has the best unobstructed panoramic view in Malibu."
            price="$1,600 night"
            />
            <Cards src="https://a0.muscache.com/im/pictures/f3601253-fa6e-4a95-b2be-0a4b74d380bc.jpg?im_w=720"
            title="Big Bear Lake, California"
            description="Rancho Pines is a Classic A-frame with a fresh balance of modern fare and rustic charm.  Centrally located just 1.2 miles from the village and Snow Summit ski resort on a quiet cul-de-sac is exactly where you’ll want to be."
            price="$310 night"            
            />
          </div>
          <div className='cards'>
            <Cards src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-594492516805388802/original/4420dceb-5c03-4ded-b740-8ef61e0850fc.jpeg?im_w=720"
            title="Malibu, California"
            description="Experience a truly luxurious and out-of-the-ordinary vacation at this oceanfront, two-story home! Admire picture-perfect sunsets and sunrises from the multiple balconies and enclosed backyard - unobstructed vistas as well as a prime location in a double-gated neighborhood, and mere steps from private beach access make this home a gem among its own."
            price="$900 night"
            />
            <Cards src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-546970472613518500/original/72d16e59-dd11-4d75-a054-98a2427c73ab.jpeg?im_w=720"
            title="Lake Arrowhead, California"
            description="Pack your bags and head to the San Bernardino Mountains for an unforgettable vacation at this charming vacation rental home! Along with 1 bedroom and 2.5 bathrooms, this cabin offers additional sleeping options in the loft and the lower level of the home, so you can bring your whole family.’ll want to be."
            price="$189 night"
            />
            <Cards src="https://a0.muscache.com/im/pictures/c429a5f1-0ad0-45d9-8ee9-65e825865710.jpg?im_w=720"
            title="Yucca Valley, California"
            description="Named #1 Most Loved Retreat of 2021 on Sunset.com - This 'Cowboy Modern' desert retreat has majestic views, and a tiny eco footprint. Residential designer Jeremy Levine wanted to leave the lightest possible footprint on the surrounding landscape, with an energy-efficient, low-impact design. He also wanted to maximize the view from every room, creating a seamless flow from the house into nature."
            price="$575 night"            
            />
          </div>
    </div>
  )
}

export default Home