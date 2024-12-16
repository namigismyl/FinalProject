import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div class="accordion" id="accordionExample" >
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            How can I track the shipping status of my physical purchase?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              When your order ships, you will receive a shipping confirmation
              email with a link to track your package. Some orders will ship in
              multiple boxes and each box will have its own unique tracking
              number. 
            </p>
            <p>Shipping duration may vary depending on the shipping
            option you choose when checking out.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Where can I find the Rockstar Store refund policy?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              You can find more information in our Refunds and Returns FAQ.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Where can I find the receipt for my order?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Receipts for all purchases are sent to the email address for your
              Rockstar Games Social Club account.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            What regions does the Rockstar Store ship to?
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>The Rockstar Store ships to the following regions:</p>
            <ul>
              <li>Australia</li>
              <li>Austria</li>
              <li>Belgium</li>
              <li>Canada</li>
              <li>Czech</li>
              <li>Republic</li>
              <li>Denmark</li>
              <li>Finland</li>
              <li>France</li>
              <li>Germany</li>
              <li>Hong Kong</li>
              <li>Ireland</li>
              <li>Italy</li>
              <li>Japan</li>
              <li>Korea</li>
              <li>Liechtenstein</li>
              <li>Latvia</li>
              <li>Lithuania</li>
              <li>Luxembourg</li>
              <li>Netherlands</li>
              <li>New Zealand</li>
              <li>Norway</li>
              <li>Poland</li>
              <li>Portugal</li>
              <li>Singapore</li>
              <li>South Africa</li>
              <li>Spain</li>
              <li>Sweden</li>
              <li>Switzerland </li>
              <li>Taiwan</li>
              <li>UK</li>
              <li>United States</li>
            </ul>
            <p>
              Costs of shipping for your order will be presented at checkout.
              Shipping duration may vary depending on the shipping option you
              choose when checking out.
            </p>
            <p> Additional duties and taxes may be
            imposed by local authorities outside the US and UK.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
