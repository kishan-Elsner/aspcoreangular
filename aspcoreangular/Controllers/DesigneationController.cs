using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using aspcoreangular.Model;

namespace aspcoreangular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesigneationController : ControllerBase
    {
        private readonly EmployeeContect _context;

        public DesigneationController(EmployeeContect context)
        {
            _context = context;
        }

        // GET: api/Designeation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblDesigneation>>> GetTblDesigneation()
        {
            var employees = (from e in _context.TblDesigneation
                             join d in _context.TblEmployee
                             on e.DesignationId  equals d.Id

                             select new TblDesigneation
                             {
                                 Id = e.Id,
                                 Name = e.Name,
                                 LastName = e.LastName,
                                 Email = e.Email,
                                 Age = e.Age,
                                 DesignationId = e.DesignationId,
                                 Designation = d.Designation,
                                 Doj = e.Doj,
                                 Gender = e.Gender,
                                 IsActive = e.IsActive,
                                 IsMarried = e.IsMarried
                             }
                        ).ToListAsync();

            return await employees;/*
            return await _context.TblDesigneation.ToListAsync();
     */   }

        // GET: api/Designeation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblDesigneation>> GetTblDesigneation(int id)
        {
            var tblDesigneation = await _context.TblDesigneation.FindAsync(id);

            if (tblDesigneation == null)
            {
                return NotFound();
            }

            return tblDesigneation;
        }

        // PUT: api/Designeation/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblDesigneation(int id, TblDesigneation tblDesigneation)
        {
            if (id != tblDesigneation.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblDesigneation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblDesigneationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Designeation
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblDesigneation>> PostTblDesigneation(TblDesigneation tblDesigneation)
        {
            _context.TblDesigneation.Add(tblDesigneation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblDesigneation", new { id = tblDesigneation.Id }, tblDesigneation);
        }

        // DELETE: api/Designeation/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblDesigneation>> DeleteTblDesigneation(int id)
        {
            var tblDesigneation = await _context.TblDesigneation.FindAsync(id);
            if (tblDesigneation == null)
            {
                return NotFound();
            }

            _context.TblDesigneation.Remove(tblDesigneation);
            await _context.SaveChangesAsync();

            return tblDesigneation;
        }

        private bool TblDesigneationExists(int id)
        {
            return _context.TblDesigneation.Any(e => e.Id == id);
        }
    }
}
