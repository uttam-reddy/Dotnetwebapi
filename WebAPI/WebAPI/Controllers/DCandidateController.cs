using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPIDonation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DCandidateController : ControllerBase
    {
        private readonly CayzenDbContext _context;
        public DCandidateController(CayzenDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCandidate>>> GetDCandidate()
        {
            return await _context.DCandidates.ToListAsync();
        }

        // get api/DCandidate/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCandidate>> GetDCandidate(int id)
        {
            var dcandidate= await _context.DCandidates.FindAsync(id);

            if(dcandidate == null)
            {
                return NotFound();
            }
            return dcandidate;
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<DCandidate>> PutDCandidate(int id,DCandidate dCandidate)
        {
            dCandidate.Id = id;
            _context.Entry(dCandidate).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!DCandidateExists(id))
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


        [HttpPost]
        public async Task<ActionResult<DCandidate>> PostDCandidate(DCandidate dCandidate)
        {
            var candidates= await _context.DCandidates.ToListAsync();
            if(candidates.FirstOrDefault(x => x.UserName == dCandidate.UserName) == null)
            {
                _context.DCandidates.Add(dCandidate);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetDCandidate", new { id = dCandidate.Id }, dCandidate);
            }



            return BadRequest(new { error ="username already exists"});
            
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<DCandidate>> PostDCandidate(int id)
        {
            var dcandidate = await _context.DCandidates.FindAsync(id);

            if(dcandidate == null)
            {
                return NotFound();
            }
            _context.DCandidates.Remove(dcandidate);
            await _context.SaveChangesAsync();

            return dcandidate;
        }






        private bool DCandidateExists(int id)
        {
            return _context.DCandidates.Any(x => x.Id == id);
        }


    } 
}
