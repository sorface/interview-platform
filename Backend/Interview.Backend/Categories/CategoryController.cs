using Interview.Backend.Responses;
using Interview.Domain.Categories;
using Interview.Domain.Categories.Edit;
using Interview.Domain.Categories.Page;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using X.PagedList;

namespace Interview.Backend.Categories;

[ApiController]
[Route("api/category")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    /// <summary>
    /// Getting a available category page.
    /// </summary>
    /// <param name="request">Request.</param>
    /// <returns>A page of category with metadata about the pages.</returns>
    [Authorize]
    [HttpGet]
    [Produces("application/json")]
    [ProducesResponseType(typeof(IPagedList<CategoryResponse>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status403Forbidden)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status500InternalServerError)]
    public Task<IPagedList<CategoryResponse>> GetTagPage([FromQuery] CategoryPageRequest request)
    {
        return _categoryService.FindPageAsync(request, HttpContext.RequestAborted);
    }

    /// <summary>
    /// Creating a new category.
    /// </summary>
    /// <param name="request">category edit request.</param>
    /// <returns>The object of the new category.</returns>
    [Authorize]
    [HttpPost]
    [Produces("application/json")]
    [ProducesResponseType(typeof(CategoryResponse), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status500InternalServerError)]
    public Task<ActionResult<CategoryResponse>> CreateTag(CategoryEditRequest request)
    {
        return _categoryService.CreateTagAsync(request, HttpContext.RequestAborted).ToResponseAsync();
    }

    /// <summary>
    /// Updating the category by ID.
    /// </summary>
    /// <param name="id">ID of the of category.</param>
    /// <param name="request">The object with the category data for which you need to update.</param>
    /// <returns>Updated category object.</returns>
    [Authorize]
    [HttpPut("{id:guid}")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(CategoryResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status403Forbidden)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(MessageResponse), StatusCodes.Status500InternalServerError)]
    public Task<ActionResult<CategoryResponse>> UpdateTag(Guid id, CategoryEditRequest request)
    {
        return _categoryService.UpdateTagAsync(id, request, HttpContext.RequestAborted).ToResponseAsync();
    }
}