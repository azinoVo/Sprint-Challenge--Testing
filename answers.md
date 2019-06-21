
1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?
A: Describe and it are used to split your tests into consumable components that are related. Describe relates to a higher component that requires testing while the
it statements will be the individual tests that branched from the higher component. It allows grouping of related tests.

2. What is the point of `Test Driven Development`? What do you think about this approach?
A: TDD is writing tests before writing code to implement those functionalities. TDD is a little tricky, but I can see the appeal. It forces you to think about the overall
structure of the components and what you need to  make that component function as it should. Tests require all the components to be working so it is a good way to
bring all the ideas and pieces together.

3. Mention three types of automated tests.
A: The three types are unit testing, integration testing, and end to end testing. Unit tests revolve around testing individual methods or small pieces of code for its functionality.
Integration tests revolve around testing whether components are working together as they should. End to end tests the whole application as a whole to real users. It's similar to the hierarchy
among cells, organs => organ systems, and the human body. Unit tests test individual cells to see if they work correctly. Integration tests how organs within various systems work together to perform
a specific task or tasks. End to end looks at the whole human body.