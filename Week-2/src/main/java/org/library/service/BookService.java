package org.library.service;

import org.library.repository.BookRepository;

public class BookService {
    private BookRepository repository;
    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }
    public void showBook() {
        repository.displayBook();
    }
}
