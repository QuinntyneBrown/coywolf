using System.Collections.Generic;

namespace Coywolf.Utilities
{
    public interface ILoggerFactory
    {
        ILogger CreateLogger(string categoryName);

        List<ILoggerProvider> GetProviders();
    }
}
