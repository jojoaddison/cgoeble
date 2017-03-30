package net.jojoadison.cgserver.web.rest;

import com.codahale.metrics.annotation.Timed;
import io.swagger.annotations.ApiParam;
import net.jojoadison.cgserver.domain.Home;
import net.jojoadison.cgserver.repository.HomeRepository;
import net.jojoadison.cgserver.web.rest.util.HeaderUtil;
import net.jojoadison.cgserver.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * Created by kojo on 30/03/17.
 */

/**
 * REST controller for managing Album.
 */
@RestController
@RequestMapping("/api")
public class HomeResource {

    private final Logger log = LoggerFactory.getLogger(HomeResource.class);

    @Inject
    private HomeRepository homeRepository;

    /**
     * POST  /homes : Create a new home.
     *
     * @param home the home to create
     * @return the ResponseEntity with status 201 (Created) and with body the new home, or with status 400 (Bad Request) if the home has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/homes")
    @Timed
    public ResponseEntity<Home> createHome(@RequestBody Home home) throws URISyntaxException {
        log.debug("REST request to save Home : {}", home);
        if (home.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("home", "idexists", "A new home cannot already have an ID")).body(null);
        }
        Home result = homeRepository.save(home);
        return ResponseEntity.created(new URI("/api/homes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("home", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /homes : Updates an existing home.
     *
     * @param home the home to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated home,
     * or with status 400 (Bad Request) if the home is not valid,
     * or with status 500 (Internal Server Error) if the home couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/homes")
    @Timed
    public ResponseEntity<Home> updateHome(@RequestBody Home home) throws URISyntaxException {
        log.debug("REST request to update Home : {}", home);
        if (home.getId() == null) {
            return createHome(home);
        }
        Home result = homeRepository.save(home);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("home", home.getId().toString()))
            .body(result);
    }

    /**
     * GET  /homes : get all the homes.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of homes in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/homes")
    @Timed
    public ResponseEntity<List<Home>> getAllHomes(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Homes");
        Page<Home> page = homeRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/homes");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /homes : get all the homes.
     *
     * @param isCurrent the current information
     * @return the ResponseEntity with status 200 (OK) and with body the home, or with status 404 (Not Found)
     */
    @GetMapping("/homes/current/{isCurrent}")
    @Timed
    public ResponseEntity<Home> getHome(@PathVariable boolean isCurrent){
        log.debug("REST request to get Home : {}", isCurrent);
        Home home = homeRepository.findByCurrentIsTrue(isCurrent);
        return Optional.ofNullable(home)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    /**
     * GET  /homes/:id : get the "id" home.
     *
     * @param id the id of the home to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the home, or with status 404 (Not Found)
     */
    @GetMapping("/homes/{id}")
    @Timed
    public ResponseEntity<Home> getHome(@PathVariable String id) {
        log.debug("REST request to get Home : {}", id);
        Home home = homeRepository.findOne(id);
        return Optional.ofNullable(home)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /homes/:id : delete the "id" home.
     *
     * @param id the id of the home to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/homes/{id}")
    @Timed
    public ResponseEntity<Void> deleteHome(@PathVariable String id) {
        log.debug("REST request to delete Home : {}", id);
        homeRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("home", id.toString())).build();
    }
}
