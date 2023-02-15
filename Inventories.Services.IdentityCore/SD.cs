using Duende.IdentityServer.Models;

namespace Inventories.Services.IdentityCore
{
    public static class SD
    {
        public const string AdminUser = "Админ";
        public const string CustomerUser = "Управление поставщиками";
        public const string ItemsUser = "Управление товарами";
        public const string OrdersUser = "Управление накладными";
        public const string StockUser = "Управление складом";
        public const string WarehouseUser = "Управление перемещением товаров";

        public static IEnumerable<IdentityResource> IdentityResources =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile()
            };
    }
}
