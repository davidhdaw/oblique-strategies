describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

//should have the title

//should have a textArea

//should display an oblique strategies card

//should display an error on the card if the fetch failed 

//the error should ask if you want to fetch again

//should keep track of the word count as you type
//"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno

//should have a submit button

//should give an error message if you try and submit without hitting the word count

//should change wordcount background color if the word count is reached

//should redirect you to logs if the submit actually goes through.

//should count down and then do another api call after 90 seconds