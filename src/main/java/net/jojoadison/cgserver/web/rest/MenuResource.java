package net.jojoadison.cgserver.web.rest;

import com.codahale.metrics.annotation.Timed;
import net.jojoadison.cgserver.domain.Menu;

import net.jojoadison.cgserver.repository.MenuRepository;
import net.jojoadison.cgserver.web.rest.util.HeaderUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
 * REST controller for managing Menu.
 */
@RestController
@RequestMapping("/api")
public class MenuResource {

    private final Logger log = LoggerFactory.getLogger(MenuResource.class);
        
    @Inject
    private MenuRepository menuRepository;

    /**
     * POST  /menus : Create a new menu.
     *
     * @param menu the menu to create
     * @return the ResponseEntity with status 201 (Created) and with body the new menu, or with status 400 (Bad Request) if the menu has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/menus")
    @Timed
    public ResponseEntity<Menu> createMenu(@RequestBody Menu menu) throws URISyntaxException {
        log.debug("REST request to save Menu : {}", menu);
        if (menu.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("menu", "idexists", "A new menu cannot already have an ID")).body(null);
        }
        Menu result = menuRepository.save(menu);
        return ResponseEntity.created(new URI("/api/menus/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("menu", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /menus : Updates an existing menu.
     *
     * @param menu the menu to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated menu,
     * or with status 400 (Bad Request) if the menu is not valid,
     * or with status 500 (Internal Server Error) if the menu couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/menus")
    @Timed
    public ResponseEntity<Menu> updateMenu(@RequestBody Menu menu) throws URISyntaxException {
        log.debug("REST request to update Menu : {}", menu);
        if (menu.getId() == null) {
            return createMenu(menu);
        }
        Menu result = menuRepository.save(menu);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("menu", menu.getId().toString()))
            .body(result);
    }

    /**
     * GET  /menus : get all the menus.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of menus in body
     */
    @GetMapping("/menus")
    @Timed
    public List<Menu> getAllMenus() {
        log.debug("REST request to get all Menus");
        List<Menu> menus = menuRepository.findAll();
        return menus;
    }

    /**
     * GET  /menus/:id : get the "id" menu.
     *
     * @param id the id of the menu to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the menu, or with status 404 (Not Found)
     */
    @GetMapping("/menus/{id}")
    @Timed
    public ResponseEntity<Menu> getMenu(@PathVariable String id) {
        log.debug("REST request to get Menu : {}", id);
        Menu menu = menuRepository.findOne(id);
        return Optional.ofNullable(menu)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /menus/:id : delete the "id" menu.
     *
     * @param id the id of the menu to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/menus/{id}")
    @Timed
    public ResponseEntity<Void> deleteMenu(@PathVariable String id) {
        log.debug("REST request to delete Menu : {}", id);
        menuRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("menu", id.toString())).build();
    }

}
