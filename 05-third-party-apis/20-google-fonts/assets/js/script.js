const formEl = $('#guestbook-form');
const nameInputEl = $('#name-input');
const commentInputEl = $('#comment-input');
const guestBookDisplayEl = $('#guest-book-display');

const printGuestData = function (name, comment) {
  const cardColumnEl = $('<div>');
  cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

  const cardEl = $('<div>');
  // add a class of .custom-card
  cardEl.addClass('card h-100');
  cardEl.appendTo(cardColumnEl);

  // add a class of .custom-card-header
  const cardName = $('<h5>').addClass('card-header custom-card-header').text(name);
  cardName.appendTo(cardEl);

  const cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  const cardComment = $('<p>').addClass('card-text').text(comment);
  cardComment.appendTo(cardBodyEl);

  guestBookDisplayEl.append(cardColumnEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  const nameInput = nameInputEl.val();
  const commentInput = commentInputEl.val();

  if (!nameInput || !commentInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printGuestData(nameInput, commentInput);

  // reset form
  nameInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
