package net.jojoadison.cgserver.repository;

import net.jojoadison.cgserver.domain.Home;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

/**
 * Created by kojo on 30/03/17.
 */
public interface HomeRepository extends MongoRepository<Home, String>{
    Home findByCurrentIsTrue(boolean current);
}
