var message = {
  success: "You have now reviewed the entire checklist. Press ok for reset",
  disinfectant:
    "Clean surfaces using soap and water. Practice routine cleaning of frequently touched surfaces. For more check out https://www.cdc.gov/coronavirus/",
  distance:
    "Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.",
  handwash:
    "Washing your hands properly takes about as long as singing Happy Birthday twice. Use alcohol-based handrub if you don’t have immediate access to soap and water. For more check out https://www.who.int/gpsc/clean_hands_protection/en/",
  mask:
    "Cover mouth and nose with mask and make sure there are no gaps between your face and the mask.Avoid touching the mask while using it",
  thermometer:
    "Generally, keep an eye out for a temperature of 100.5 degrees Fahrenheit or higher. If you’ve just had hot coffee, or water or ice cream, wait a little bit before checking for fever.",
  virus:
    "The coronavirus outbreak was declared a Public Health Emergency of International Concern on 30 January 2020"
};

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalButton = document.querySelector(".modal__button");

const openModal = function(key) {
  modalTitle.textContent = key;
  modalText.textContent = message[key];
  backdrop.classList.add("open");
  modal.classList.add("open__modal");
};

modalButton.addEventListener("click", function() {
  backdrop.classList.remove("open");
  modal.classList.remove("open__modal");
  if (modalTitle.textContent === "success") {
    location.reload();
  }
});
