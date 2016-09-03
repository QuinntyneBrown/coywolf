namespace Coywolf.Utilities
{
    public interface ILogger
    {
        void AddProvider(ILoggerProvider provider);
    }
}
