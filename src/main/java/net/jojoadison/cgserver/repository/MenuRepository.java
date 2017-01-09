package net.jojoadison.cgserver.repository;

import net.jojoadison.cgserver.domain.Menu;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Menu entity.
 */
@SuppressWarnings("unused")
public interface MenuRepository extends MongoRepository<Menu,String> {

}
