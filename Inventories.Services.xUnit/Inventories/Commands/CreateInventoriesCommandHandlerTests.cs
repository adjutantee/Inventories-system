using Inventories.Services.xUnit.Common;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace Inventories.Services.xUnit.Inventories.Commands
{
    public class CreateInventoriesCommandHandlerTests : TestCommandBase
    {
        [Fact]
        public async Task CreateInventoriesCommandHandler_Success()
        {
            var handler = new CreateInventoriesCommandHandler(customerContext);
        }
    }
}
