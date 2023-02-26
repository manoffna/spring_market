package com.mylab.spring_market.services;

import com.mylab.spring_market.entities.Product;
import com.mylab.spring_market.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor    //это аннотация lombok. Говорит автоматически создавать конструктор для бина при старте приложения
public class ProductService {
        private final ProductRepository productRepository;

        public List<Product> findAll() {
            return productRepository.findAll();

        }

        public Optional<Product> findById(Long id) {
            return productRepository.findById(id);
        }

        public void deleteById(Long id) {
            productRepository.deleteById(id);
        }

}
